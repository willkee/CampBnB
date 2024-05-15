export const variants = {
	wrapper: {
		open: {
			scaleY: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.05,
			},
		},
		closed: {
			scaleY: 0,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.1,
			},
		},
	},
	icon: { open: { rotate: 0 }, closed: { rotate: 0 } },
	item: {
		open: {
			opacity: 1,
			y: 0,
			transition: {
				when: "beforeChildren",
			},
		},
		closed: {
			opacity: 0,
			y: -15,
			transition: {
				when: "afterChildren",
			},
		},
	},
	actionIcon: {
		open: { scale: 1 },
		closed: { scale: 0, y: -7 },
	},
};
