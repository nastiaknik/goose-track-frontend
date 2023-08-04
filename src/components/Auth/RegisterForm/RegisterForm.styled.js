import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 40px 24px;
  border-radius: 8px;
  background-color: var(--primary-bg-color);

  font-family: var(--primary-font);
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 768px) {
    padding: 25px;
  }

  > label {
    margin-top: 24px;

    @media screen and (min-width: 768px) {
      margin-top: 18px;
    }

    :nth-child(2) {
      margin-top: 32px;

      @media screen and (min-width: 768px) {
        margin-top: 40px;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1;
  color: var(--accent-text-color);
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),
    0px 47px 355px 0px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  width: 100%;
  margin-top: 32px;
  padding: 14px;

  border-radius: 16px;
  background: var(--accent-bg-color);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: var(--light-text-color);
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.36px;

  transition: background var(--animation);
  :hover,
  :focus {
    background: var(--hover-btn-bg-color);
  }

  > svg {
    width: 18px;
    height: 18px;
    stroke-width: 3px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    padding: 16px;

    font-size: 18px;
  }
`;

export const GoogleLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  width: 100%;
  margin-top: 10px;
  padding: 14px;

  border-radius: 16px;
  background: var(--accent-bg-color);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: var(--light-text-color);
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.36px;

  transition: background var(--animation);
  :hover,
  :focus {
    background: var(--hover-btn-bg-color);
  }

  > svg {
    width: 18px;
    height: 18px;
    stroke-width: 1px;

    @media screen and (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px;

    font-size: 18px;
  }
`;

export const Divider = styled.p`
  margin-top: 10px;
  padding: 0 16px;

  text-transform: uppercase;
  text-align: center;
  color: var(--auth-placeholder-color);

  :before,
  :after {
    content: " ";
    display: inline-block;
    width: 70px;
    height: 3px;
    background-color: var(--auth-placeholder-color);
    margin-bottom: 5px;
  }

  :before {
    margin-right: 10px;
  }

  :after {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    :before,
    :after {
      width: 155px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
