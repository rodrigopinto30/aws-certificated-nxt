import Footer from "@/components/footer/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer tests", () => {
  it("Should render title", () => {
    render(<Footer />);
    const logo = screen.getByTestId("logo-section");
    expect(logo).toHaveTextContent("CloudCertify Pro");
  });

  it("Should render paragraph", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Dedicated to providing the best hands/i)
    ).toBeInTheDocument();
  });

  it("Should render data", () => {
    render(<Footer />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("Should render all card", () => {
    render(<Footer />);
    expect(screen.getAllByTestId("footer-card"));
  });

  it("Should render the correct col-span class", () => {
    render(<Footer />);
    const footerCards = screen.getAllByTestId("footer-card");
    expect(footerCards.length).toBe(4);

    footerCards.forEach((card) => {
      expect(card).toHaveClass(/col-span/);
    });
  });
});
