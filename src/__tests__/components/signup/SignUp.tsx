import SignupForm from "@/components/signup-form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
  }),
}));

describe("Tests of Sign up", () => {
  it("Should render card", () => {
    render(<SignupForm />);
    expect(screen.getByTestId("signup-card")).toBeInTheDocument();
  });

  it("Should render title", () => {
    render(<SignupForm />);
    expect(screen.getByTestId("signup-title")).toBeInTheDocument();
  });

  it("Should render description", () => {
    render(<SignupForm />);
    expect(screen.getByText(/Access your cloud/i)).toBeInTheDocument();
  });

  it("Should render labels", () => {
    render(<SignupForm />);
    const labels = screen.getAllByTestId("signup-label");
    expect(labels.length).toBeLessThanOrEqual(5);
  });

  it("Should render inputs", () => {
    render(<SignupForm />);
    const inputs = screen.getAllByTestId("signup-input");
    expect(inputs.length).toBeGreaterThan(3);
  });

  it("Should allow user to type in fields", async () => {
    render(<SignupForm />);

    const inputs = screen.getAllByTestId("signup-input");

    await userEvent.type(inputs[0], "John");
    await userEvent.type(inputs[1], "Doe");
    await userEvent.type(inputs[2], "you@example.com");
    await userEvent.type(inputs[3], "asdasdasd");
    await userEvent.type(inputs[4], "asdasdasd");

    expect(inputs[0]).toHaveValue("John");
    expect(inputs[1]).toHaveValue("Doe");
    expect(inputs[2]).toHaveValue("you@example.com");
    expect(inputs[3]).toHaveValue("asdasdasd");
    expect(inputs[4]).toHaveValue("asdasdasd");
  });

  it("Should render the correct color class of the button", () => {
    render(<SignupForm />);
    const button = screen.getByTestId("signup-button");
    expect(button).toHaveClass("w-full");
  });

  it("Should show validation errors if submit empty form", async () => {
    render(<SignupForm />);
    const button = screen.getByTestId("signup-button");
    await userEvent.click(button);
    expect(
      await screen.findByText(/Invalid email address/i)
    ).toBeInTheDocument();
  });

  /* it("Should submit form successfully", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<SignupForm />);

    const name = screen.getByPlaceholderText("John");
    const lastName = screen.getByPlaceholderText("Doe");
    const email = screen.getByPlaceholderText("you@example.com");
    const password = screen.getAllByPlaceholderText("••••••••");

    const button = screen.getByTestId("signup-button");

    await userEvent.type(name, "John");
    await userEvent.type(lastName, "Doe");
    await userEvent.type(email, "my@example.com.ar");
    await userEvent.type(password[0], "asdasdasd");
    await userEvent.type(password[1], "asdasdasd");

    await userEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("Login successful! Token received.");
    alertMock.mockRestore();
  }); */

  it("Should NOT show loading state because submission is synchronous", async () => {
    render(<SignupForm />);
    const button = screen.getByTestId("signup-button");
    await userEvent.click(button);
    expect(button).not.toBeDisabled();
  });

  it("Should keep button text as sign up (no loading state)", async () => {
    render(<SignupForm />);
    const button = screen.getByTestId("signup-button");
    await userEvent.click(button);

    expect(button).toHaveTextContent("Sign Up");
  });

  it("Should match snapshot", () => {
    const { container } = render(<SignupForm />);
    expect(container).toMatchSnapshot();
  });
});
