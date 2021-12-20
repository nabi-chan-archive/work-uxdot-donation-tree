import { ReactNode } from "react";
import Content from "../Content";
import Flex from "../Flex";
import Space from "../Space";
import Caption from "../Caption";
import Title from "../Title";
import AlignCenter from "../AlignCenter";

interface Props {
	caption: string;
	title: string;
	buttons: ReactNode[];
}

const Sections: React.FC<Props> = ({ caption, title, buttons }) => {
	return (
		<AlignCenter>
			<Content level={"content"}>
				<Flex>
					<Space w={119} />
					<div>
						<Caption>{caption}</Caption>
						<Space h={8} />
						<Title>{title}</Title>
						<Space h={22} />
						<Flex>
							{buttons.map((button, index) => (
								<Flex key={index}>
									{button}
									<Space w={16} key={`space${index}`} />
								</Flex>
							))}
						</Flex>
					</div>
				</Flex>
			</Content>
		</AlignCenter>
	);
};

export default Sections;
