import zxcvbn from "zxcvbn";
import { useTranslation } from "react-i18next";
import {
  Container,
  ProgressBar,
  ProgressIndicator,
  ProgressText,
} from "./PasswordStrengthIndicator.styled";

export const PasswordStrengthIndicator = ({ password }) => {
  const { t } = useTranslation();
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const handleProgressTextContent = (num) => {
    switch (num) {
      case 0:
        return t("Very weak");
      case 25:
        return t("Weak");
      case 50:
        return t("Medium");
      case 75:
        return t("Strong");
      case 100:
        return t("Very strong");
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
