import zxcvbn from "zxcvbn";
import {
  Container,
  ProgressBar,
  ProgressIndicator,
  ProgressText,
} from "./PasswordStrengthIndicator.styled";

export const PasswordStrengthIndicator = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const handleProgressTextContent = (num) => {
    switch (num) {
      case 0:
        return "Very weak";
      case 25:
        return "Weak";
      case 50:
        return "Medium";
      case 75:
        return "Strong";
      case 100:
        return "Very strong";
      default:
        return "";
    }
  };

  return (
    <Container>
      <ProgressBar>
        <ProgressIndicator num={num}></ProgressIndicator>
      </ProgressBar>
      <ProgressText num={num}>{handleProgressTextContent(num)}</ProgressText>
    </Container>
  );
};
