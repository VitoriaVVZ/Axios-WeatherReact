import styled from 'styled-components';

export const FooterContainer = styled.footer`
  backgrond: ${({ theme }) => theme.colors.headerFooterBg};
  color: ${({ theme }) => theme.colors.footerText};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  margin-top: auto;
`;