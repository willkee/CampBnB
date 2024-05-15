import {
	FiUser,
	FiChevronDown,
	FiPlusSquare,
	FiMenu,
	FiLogOut,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import { variants } from "./variants";

const Menu = () => {
	const [open, setOpen] = useState(false);
	const [exitTimer, setExitTimer] = useState(null);
	const location = useLocation();
	const menuRef = useRef(null);

	useEffect(() => {
		setOpen(false);
	}, [location]);

	useEffect(() => {
		const handleExit = (e) => {
			if (menuRef.current && !menuRef?.current?.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleExit);
		return () => document.removeEventListener("mousedown", handleExit);
	}, [menuRef]);

	const handleMouseLeave = () => {
		const timer = setTimeout(() => {
			setOpen(false);
		}, 3000);
		setExitTimer(timer);
	};

	const handleMouseEnter = () => {
		if (exitTimer) {
			clearTimeout(exitTimer);
			setExitTimer(null);
		}
	};

	return (
		<div className={styles.container} ref={menuRef}>
			<motion.div
				animate={open ? "open" : "closed"}
				className={styles.relative}
			>
				<button
					onClick={() => setOpen((pv) => !pv)}
					className={`${styles.button} ${styles.buttonTransition}`}
				>
					<span className={styles.buttonText}>
						<FiMenu size="24px" />
					</span>
					<motion.span
						variants={variants.icon}
						style={{ display: "flex", alignItems: "center" }}
					>
						<FiChevronDown />
					</motion.span>
				</button>

				{open ? (
					<motion.ul
						initial={variants.wrapper.closed}
						variants={variants.wrapper}
						className={styles.ul}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						style={{
							transformOrigin: "top",
							transform: "translateX(-50%)",
						}}
					>
						<Option
							setOpen={setOpen}
							Icon={FiUser}
							text="Profile"
							to="/profile"
						/>
						<Option
							setOpen={setOpen}
							Icon={FiPlusSquare}
							text="Add New Spot"
							to="/spots/new"
						/>
						<Option
							setOpen={setOpen}
							Icon={FiLogOut}
							text="Sign Out"
						/>
					</motion.ul>
				) : null}
			</motion.div>
		</div>
	);
};

const Option = ({ text, Icon, setOpen, to }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [url, setUrl] = useState(location.pathname);

	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	// Disable menu option if we are already on that page.
	if (url === to) return null;

	return (
		<motion.li
			variants={variants.item}
			onClick={() => {
				setOpen(false);
				navigate(to);
			}}
			className={styles.option}
		>
			<motion.span
				variants={variants.actionIcon}
				className={styles.action_icon}
			>
				<Icon />
			</motion.span>
			<span>{text}</span>
		</motion.li>
	);
};

export default Menu;
