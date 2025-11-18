import LabStepCard from "@/components/handsOnLabsSection/LabStepCard";
import { render, screen } from "@testing-library/react";
import { labSteps } from "@/data/lab-data";
import HandsOnLabsSection from "@/components/handsOnLabsSection/HandsOnLabsSection";
import { Container } from "lucide-react";

describe("HandsOnLabs Section", () => {
  it("Should render title", () => {
    render(<HandsOnLabsSection />);
    expect(
      screen.getByText("Hands-On Labs: Practice Makes Perfect")
    ).toBeInTheDocument();
  });

  it("Should render paragraph", () => {
    render(<HandsOnLabsSection />);
    expect(
      screen.getByText(/Learn how to deploy real AWS services without/)
    ).toBeInTheDocument();
  });

  it("Should render data", () => {
    render(<HandsOnLabsSection />);
    expect(screen.getByText(/timed challenge/i)).toBeInTheDocument();
  });

  it("Should render all lab step card", () => {
    render(<HandsOnLabsSection />);
    const labStepCards = screen.getAllByTestId("labs-card");
    expect(labStepCards.length).toBe(labSteps.length);
  });

  it("Should render all lab step titles", () => {
    render(<HandsOnLabsSection />);
    labSteps.forEach((lab) => {
      expect(screen.getByText(lab.title)).toBeInTheDocument();
    });
  });

  it("Should render the correct color class", () => {
    render(<HandsOnLabsSection />);
    const labStepCards = screen.getAllByTestId("labs-card");
    expect(labStepCards.length).toBe(labSteps.length);

    labStepCards.forEach((labCard) => {
      expect(labCard).toHaveClass("bg-white");
    });
  });

  it("Should render lab icon", () => {
    render(<HandsOnLabsSection />);
    const icons = screen.getAllByTestId("lab-icon");
    expect(icons.length).toBeGreaterThan(2);
  });

  it("Should render the section container", () => {
    render(<HandsOnLabsSection />);
    expect(screen.getByTestId("lab-container")).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    render(<HandsOnLabsSection />);
    expect(Container).toMatchSnapshot();
  });
});
