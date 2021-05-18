interface IButtonProps {
  onClick?: ((event?: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default IButtonProps;
