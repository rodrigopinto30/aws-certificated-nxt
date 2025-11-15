import { render, screen } from "@testing-library/react";
import CertificationCard from "@/components/coreCurriculumSection/CertificationCard";
import { AwsCertification } from "@/types";
import { awsCertifications } from "@/data/aws-certifications";
import { Award, LucideIcon } from "lucide-react";
import "@testing-library/jest-dom";
import CoreCurriculumSection from "@/components/coreCurriculumSection/CoreCurriculumSection";

describe("Certification section", () => {
  it("should render certification card", () => {
    render(<CoreCurriculumSection />);
    expect(
      screen.getByText("Master the AWS Core Services")
    ).toBeInTheDocument();
  });

  it("should render choose your specialization", () => {
    render(<CoreCurriculumSection />);
    expect(
      screen.getByText(/then choose your specialization/i)
    ).toBeInTheDocument();
  });

  it("Should render data", () => {
    render(<CoreCurriculumSection />);
    expect(screen.getByText(/Developer - Associate/i)).toBeInTheDocument();
  });

  it("Should render all certification cards", () => {
    render(<CoreCurriculumSection />);
    const cards = screen.getAllByTestId("certification-card");
    expect(cards.length).toBe(awsCertifications.length);
  });

  it("Should render all certification titles", () => {
    render(<CoreCurriculumSection />);

    awsCertifications.forEach((cert) => {
      expect(screen.getByText(cert.title)).toBeInTheDocument();
    });
  });

  it("Should apply the correct color class depending on level", () => {
    render(<CoreCurriculumSection />);

    const badges = screen.getAllByText("Associate");
    expect(badges.length).toBeGreaterThan(0);

    badges.forEach((badge) => {
      expect(badge).toHaveClass("bg-blue-500");
    });
  });

  it("should render certification icons", () => {
    render(<CoreCurriculumSection />);

    const icons = screen.getAllByTestId("certification-icon");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("Should render section heading as an accessible heading", () => {
    render(<CoreCurriculumSection />);

    const heading = screen.getByRole("heading", {
      name: /Master the AWS core Services/i,
    });
  });

  it("Should render the section container", () => {
    render(<CoreCurriculumSection />);
    expect(screen.getByTestId("core-curriculum-section")).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<CoreCurriculumSection />);
    expect(container).toMatchSnapshot();
  });
});
