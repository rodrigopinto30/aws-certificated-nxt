import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MetricaCard from "@/components/certificationRouteSection/MetricaCard";
import { pathData } from "@/data/path-data";
import { Metrica } from "@/types";
import CertificationRouteSection from "@/components/certificationRouteSection/CertificationRouteSection";

const scrollNext = jest.fn();

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [jest.fn(), { scrollNext }],
}));

// Framer Motion mock
jest.mock("framer-motion", () => {
  const Original = jest.requireActual("framer-motion");
  type DivMotionProps = React.ComponentProps<"div"> & {
    initial?: unknown;
    animate?: unknown;
    transition?: unknown;
  };
  return {
    ...Original,
    motion: {
      div: (props: DivMotionProps) => <div {...props} />,
    },
  };
});

describe("Certification route section", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    scrollNext.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });
  it("Should render all labels", () => {
    render(<CertificationRouteSection />);
    pathData.forEach((item: Metrica) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("Each card should have the correct base class", () => {
    render(<CertificationRouteSection />);
    const cards = screen.getAllByTestId("metrica-card");
    cards.forEach((card) => {
      expect(card).toHaveClass("flex");
    });
  });

  it("Should render an accessible <section>", () => {
    render(<CertificationRouteSection />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  // Autoplay should cleanup
  it("Should setup and clear autoplay interval", () => {
    const clearSpy = jest.spyOn(global, "clearInterval");

    const { unmount } = render(<CertificationRouteSection />);

    jest.runOnlyPendingTimers();

    unmount();

    expect(clearSpy).toHaveBeenCalledTimes(1);
  });

  it("Should not crash if Metrica has missing fields", () => {
    const brokenItem = {
      id: 0,
      label: undefined,
      value: undefined,
    } as unknown as Metrica;

    render(<MetricaCard met={brokenItem} />);
    expect(screen.getByTestId("metrica-props-card")).toBeInTheDocument();
  });

  // Change unexpectedly
  it("pathData should not change unexpectedly", () => {
    expect(pathData).toMatchInlineSnapshot(`
[
  {
    "id": 1,
    "label": "Pass Rate",
    "proposal": "La tasa de éxito de los estudiantes que completan el curso.",
    "value": "95%",
  },
  {
    "id": 2,
    "label": "Average Salary Increase",
    "proposal": "Mostrar el retorno de la inversión después de la certificación.",
    "value": "$18000",
  },
  {
    "id": 3,
    "label": "Total Students",
    "proposal": "Prueba social de la escala de la plataforma.",
    "value": "50000",
  },
]
`);
  });
});
