import CommunitySection from "@/components/communityCtaSection/CommunityCtaSection";
import { render, screen } from "@testing-library/react";
import { communityBenefits } from "@/data/community-data";
import { CertificacionPaso } from "@/types";

describe("Community Cta Section", () => {
  it("Should render title", () => {
    render(<CommunitySection />);
    expect(screen.getByText(/The Power of Community/i)).toBeInTheDocument();
  });

  it("Should render paragraph", () => {
    render(<CommunitySection />);
    expect(
      screen.getByText(/Dont learn in isolation. Join thousands/i)
    ).toBeInTheDocument();
  });

  it("Should render all labels", () => {
    render(<CommunitySection />);
    communityBenefits.forEach((benefit: CertificacionPaso) => {
      expect(screen.getByText(benefit.title)).toBeInTheDocument();
    });
  });

  it("Should render all Benefit cards", () => {
    render(<CommunitySection />);
    const benefitCards = screen.getAllByTestId("benefit-card");
    expect(benefitCards.length).toBe(communityBenefits.length);
  });

  it("Should render all benefit card titles", () => {
    render(<CommunitySection />);
    const benefitCardTitles = screen.getAllByTestId("benefit-title");
    expect(benefitCardTitles.length).toBe(communityBenefits.length);
  });

  it("Should render the correct color class", () => {
    render(<CommunitySection />);
    const benefitCard = screen.getAllByTestId("benefit-card");
    expect(benefitCard.length).toBe(communityBenefits.length);

    benefitCard.forEach((card) => {
      expect(card).toHaveClass("bg-white");
    });
  });

  it("Should render benefit icon", () => {
    render(<CommunitySection />);
    const icons = screen.getAllByTestId("benefit-icon");
    expect(icons.length).toBeGreaterThan(3);
  });

  it("Should render section container", () => {
    render(<CommunitySection />);
    expect(screen.getByTestId("benefit-container")).toBeInTheDocument();
  });

  it("Shoul match snapshot", () => {
    const { container } = render(<CommunitySection />);
    expect(container).toMatchSnapshot();
  });
});
