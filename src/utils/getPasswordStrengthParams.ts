const passwordWidth = {
  veryWeak: 20,
  weak: 40,
  good: 60,
  strong: 80,
  veryStrong: 100,
};
const minPasswordLength = 8;

const getPasswordStrengthWidth = (password: string): number => {
  let width = 0;

  const widthLevel = 20;

  if (/[A-Z]/.test(password)) width += widthLevel;

  if (/[a-z]/.test(password)) width += widthLevel;

  if (/[0-9]/.test(password)) width += widthLevel;

  if (/[!@#$%^&*]/.test(password)) width += widthLevel;

  if (password.length >= minPasswordLength) width += widthLevel;

  return width;
};

const getPasswordStrengthColor = (width: number): string => {
  const { veryWeak, weak, good, strong, veryStrong } = passwordWidth;

  switch (width) {
    case veryWeak:
      return '#880808';
    case weak:
      return '#CC5500';
    case good:
      return '#FFC300';
    case strong:
      return '#007FFF';
    case veryStrong:
      return '#66FF00';

    default:
      return '';
  }
};

const getPasswordStrengthParams = (password: string): { color: string; width: string } => {
  const width = getPasswordStrengthWidth(password);
  const color = getPasswordStrengthColor(width);

  return { color, width: `${width}%` };
};

export default getPasswordStrengthParams;
