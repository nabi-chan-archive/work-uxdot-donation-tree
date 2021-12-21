import { motion } from "framer-motion";

const chickenVariants = {
	show: {
		opacity: 1,
		transition: {
			staggerDirection: -1,
			staggerChildren: 0.03,
		},
	},
	hide: {
		opacity: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.03,
		},
	},
};

const StaggerChildren: React.FC = ({ children }) => {
	return (
		<motion.div
			initial={"hide"}
			animate={"show"}
			exit={"hide"}
			variants={chickenVariants}>
			{children}
		</motion.div>
	);
};

export default StaggerChildren;
