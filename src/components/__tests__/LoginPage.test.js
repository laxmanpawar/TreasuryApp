import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from '../LoginPage';

describe('LoginPage', () => {
    it('renders welcome message', () => {
        render(<LoginPage />);
        expect(screen.getByText('Welcome to new age of finance')).toBeInTheDocument();
    });

    it('renders form inputs', () => {
        render(<LoginPage />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Customer Code')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('handles form submission', async () => {
        render(<LoginPage />);
        const submitButton = screen.getByText('Login');
        await userEvent.click(submitButton);
    });
});