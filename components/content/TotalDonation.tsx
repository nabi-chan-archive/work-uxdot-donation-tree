import styled from "styled-components";

const TotalDonation = styled.dl`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	font-size: 14px;
	border-bottom: solid 1px ${({ theme }) => theme.treeDeepGreen.toString()};
	color: ${({ theme }) => theme.white.toString()};
	background-color: ${({ theme }) => theme.treeOrange.toString()};
`;

export default TotalDonation;
