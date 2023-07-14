import { PasswordRecoveryForm } from "components/Auth/PasswordRecoveryForm/PasswordRecoveryForm";
import { Container, ContentThumb } from "./PasswordRecoveryPage.styled";

function PasswordRecoveryPage() {
  return (
    <Container>
      <ContentThumb>
        <PasswordRecoveryForm />
      </ContentThumb>
    </Container>
  );
}

export default PasswordRecoveryPage;
