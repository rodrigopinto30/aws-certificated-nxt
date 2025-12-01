import LoginForm from "@/components/login-form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue(null),
  }),
}));

describe("Sign in tests", () => {
  it("Should render card", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("login-card")).toBeInTheDocument();
  });

  it("Should render title", () => {
    render(<LoginForm />);
    const sigIng = screen.getAllByText(/sign in/i);
    expect(sigIng.length).toBeGreaterThan(1);
  });

  it("Should render description", () => {
    render(<LoginForm />);
    expect(
      screen.getByText(/Access your cloud training dashboard./i)
    ).toBeInTheDocument();
  });

  it("Should render labels", () => {
    render(<LoginForm />);
    const labels = screen.getAllByTestId("label-card");
    expect(labels.length).toBeGreaterThanOrEqual(2);
  });

  it("Should render inputs", () => {
    render(<LoginForm />);
    const inputs = screen.getAllByTestId("input-card");
    expect(inputs.length).toBeGreaterThanOrEqual(2);
  });

  it("Should allow user to type in fields", async () => {
    render(<LoginForm />);

    const inputs = screen.getAllByTestId("input-card");

    await userEvent.type(inputs[0], "user@gmail.com");
    await userEvent.type(inputs[1], "asdasdasd");

    expect(inputs[0]).toHaveValue("user@gmail.com");
    expect(inputs[1]).toHaveValue("asdasdasd");
  });

  it("Should render the correct color class of the button", () => {
    render(<LoginForm />);
    const buttonLogin = screen.getByTestId("button-login");

    expect(buttonLogin).toHaveClass("w-full");
  });

  it("Should show validation errors if submit empty form", async () => {
    render(<LoginForm />);
    const button = screen.getByTestId("button-login");
    await userEvent.click(button);
    expect(
      await screen.findByText(/Password must be at least 8/i)
    ).toBeInTheDocument();
  });

  it("Should submit form successfully", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/you@example.com/i);
    const password = screen.getByPlaceholderText(/••••••••/i);
    const button = screen.getByTestId("button-login");

    await userEvent.type(email, "test@gmail.com");
    await userEvent.type(password, "asdasdasd");

    await userEvent.click(button);
  });

  it("Should NOT show loading state because submission is synchronous", async () => {
    render(<LoginForm />);

    const button = screen.getByTestId("button-login");

    await userEvent.click(button);

    expect(button).not.toBeDisabled();
  });

  it("Should keep button text as Sign In (no loading state)", async () => {
    render(<LoginForm />);

    const button = screen.getByTestId("button-login");
    await userEvent.click(button);

    expect(button).toHaveTextContent("Sign In");
  });

  it("Should render link to sign-up", () => {
    render(<LoginForm />);
    expect(screen.getByText(/don't have/i)).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
