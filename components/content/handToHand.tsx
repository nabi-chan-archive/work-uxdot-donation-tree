import Image from "next/image";
import Absolute from "../Absolute";

const HandToHand: React.FC = () => {
	return (
		<Absolute top={0} bottom={0} right={0}>
			<div
				style={{
					position: "relative",
					overflow: "hidden",
					height: "100vh",
					width: "100vw",
				}}>
				<Image
					layout={"fill"}
					src={"/hand_to_hand.png"}
					objectFit={"cover"}
					objectPosition={"center"}
					alt={""}
				/>
			</div>
		</Absolute>
	);
};

export default HandToHand;
