import { GetServerSideProps, NextPage } from "next";
import Background from "../../components/Background";
import Button from "../../components/Button";
import SpaceBetween from "../../components/content/SpaceBetween";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Space from "../../components/Space";
import DonateTemperature from "../../components/content/DonateTemperature";
import Text from "../../components/Text";
import Absolute from "../../components/Absolute";
import Flex from "../../components/Flex";
import Image from "next/image";
import Tree, { Ball } from "../../components/content/Tree";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { requester } from "../../lib/requster";
import Link from "next/link";
import DonationModel from "../../model/DonationModel";

const PageButton = styled.button<{
	left?: number;
	right?: number;
}>`
	position: absolute;
	top: 50%;
	left: ${({ left }) => `${left}px`};
	right: ${({ right }) => `${right}px`};
	transform: translate3d(0, -50%, 0);
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: ${({ theme }) => theme.white.alpha(0.7).toString()};
	cursor: pointer;
	transition: background-color 0.3s ease;
	border-radius: 50%;
	z-index: 10;

	&:hover {
		background: ${({ theme }) => theme.white.toString()};
	}
`;

interface Props {
	meta: {
		_count: number;
	};
	tree: Ball[];
	info: {
		id: number;
		name: string;
		phone: string;
	}[];
}

const Donate: NextPage<Props> = ({ meta, tree, info }) => {
	const maxPage = Math.floor(meta._count / 9);
	const [treeData, setTreeData] = useState<Props["tree"]>(tree);
	const [page, setPage] = useState(0);
	const [visible, setVisible] = useState(true);

	async function onChangePage(target: "next" | "prev") {
		if (target === "next") setPage((prev) => prev + 1);
		if (target === "prev") setPage((prev) => prev - 1);

		setVisible(false);
		setTreeData(
			(
				await requester.get("/api/donation/tree", {
					params: {
						page: maxPage - (page + (target === "next" ? 1 : -1)),
					},
				})
			).data,
		);
	}

	return (
		<Grid>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}>
				<Background background={"treeRed"} textColor={"white"}>
					<SpaceBetween background={"treeOrange"} text={"white"}>
						<dt>누적 기부금액</dt>
						<dd>{(meta._count * 1000).toLocaleString()}원</dd>
					</SpaceBetween>
					<AlignCenter
						justify
						style={{
							height: "calc(100% - 39px)",
						}}>
						<div>
							<DonateTemperature
								current={meta._count * 1000}
								target={1000000}
							/>
							<Space h={35} />
							<Link href={"/"} passHref>
								<Button background={"white"} color={"treeRed"}>
									기부하러 가기
								</Button>
							</Link>
						</div>
					</AlignCenter>
				</Background>
				<Background background={"white"} textColor={"black"}>
					<SpaceBetween background={"treeLightGrey"} text={"treeDeepGreen"}>
						<dt>함께해주신 분들</dt>
						<dd>
							<Text color={"treeGreen"} weight={700}>
								총 {meta._count}명
							</Text>
						</dd>
					</SpaceBetween>

					<div
						style={{
							maxHeight: "calc(100vh - 41px - 39px)",
							overflowY: "auto",
						}}>
						{info.map((info) => (
							<SpaceBetween key={info.id} background={"white"} text={"black"}>
								<dt>{info.name} 님</dt>
								<dd>
									<Text color={"treeGrey"}>{info.phone}</Text>
								</dd>
							</SpaceBetween>
						))}
					</div>
				</Background>
			</div>

			<Background background={"treeDeepGreen"} textColor={"white"}>
				<div
					style={{
						display: "grid",
						gridTemplateRows: "1fr 40px",
						position: "relative",
						height: "100%",
					}}>
					{page > 0 ? (
						<PageButton left={85} onClick={() => onChangePage("prev")}>
							<svg
								width="13"
								height="23"
								viewBox="0 0 13 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="12.0209"
									y="21.9203"
									width="1"
									height="16"
									transform="rotate(135 12.0209 21.9203)"
									fill="#132622"
								/>
								<rect
									x="11.3137"
									width="0.999999"
									height="16"
									transform="rotate(45 11.3137 0)"
									fill="#132622"
								/>
							</svg>
						</PageButton>
					) : null}
					<AlignCenter justify>
						<AnimatePresence onExitComplete={() => setVisible(true)}>
							{Array(maxPage + 1)
								.fill("")
								.map((_, index) => {
									return index === page && visible ? (
										<Tree key={index} balls={treeData} />
									) : null;
								})}
						</AnimatePresence>
					</AlignCenter>
					{page < maxPage ? (
						<PageButton right={85} onClick={() => onChangePage("next")}>
							<svg
								width="13"
								height="23"
								viewBox="0 0 13 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="0.979248"
									y="1.07968"
									width="1"
									height="16"
									transform="rotate(-45 0.979248 1.07968)"
									fill="#132622"
								/>
								<rect
									x="1.68628"
									y="23"
									width="0.999999"
									height="16"
									transform="rotate(-135 1.68628 23)"
									fill="#132622"
								/>
							</svg>
						</PageButton>
					) : null}

					<Background background={"treeLightGrey"} textColor={"black"}>
						<AlignCenter justify>
							<Text size={10} weight={600}>
								{page + 1} / {maxPage}
							</Text>
						</AlignCenter>
					</Background>
				</div>
				<Absolute right={40} top={81}>
					<Flex>
						<Image src={"/uxdot.svg"} alt={"UXDot"} width={70} height={21.24} />
						<Space w={24} />
						<Image
							src={"/starthub.svg"}
							alt={"STARTHUB"}
							width={129}
							height={22}
						/>
					</Flex>
				</Absolute>
			</Background>
		</Grid>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const model = new DonationModel();
	const meta = await model.metadata();
	const info = await model.list(20, 0);
	const tree = [
		...info.slice(0, 9),
		...model.getSmallBalls(Math.floor(meta._count / 9)),
	].sort((p, c) => (p.top > c.top ? 1 : -1));

	return {
		props: {
			meta,
			tree,
			info,
		},
	};
};

export default Donate;
