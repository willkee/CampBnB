import { useDispatch } from "react-redux";
import { showModal, currentModal } from "../../store/modal";
import EditReview from "../../components/Reviews/EditReview";
import DeleteReview from "../../components/Reviews/DeleteReview";
import css from "./icons.module.css";

export function ArrowLeft() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="12px"
			viewBox="0 0 448 512"
			className={css.mr5}
		>
			<path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z" />
		</svg>
	);
}

export function ArrowRightToBracket() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="16px"
			viewBox="0 0 512 512"
			className={css.mr5}
		>
			<path d="M347.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L196.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM336 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c44.2 0 80-35.8 80-80l0-288c0-44.2-35.8-80-80-80l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-96 0z" />
		</svg>
	);
}

export function MenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16px"
			fill="currentColor"
			viewBox="0 0 448 512"
		>
			<path d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z" />
		</svg>
	);
}

export function Backpack() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="16px"
			viewBox="0 0 448 512"
		>
			<path d="M192 48h64c4.4 0 8 3.6 8 8V96H184V56c0-4.4 3.6-8 8-8zm-56 8V96h-8C57.3 96 0 153.3 0 224V448c0 35.3 28.7 64 64 64l0-112V352c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64v48V512c35.3 0 64-28.7 64-64V224c0-70.7-57.3-128-128-128h-8V56c0-30.9-25.1-56-56-56H192c-30.9 0-56 25.1-56 56zM352 512V416H96v96H352zM144 176H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16zM352 384V352c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v32H352z" />
		</svg>
	);
}

export function Campground() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
			className={css.mr5}
		>
			<path d="M394.3 3.7c6.8 5.7 7.7 15.8 2 22.5L308.9 130.4 532.8 397.2C540 405.8 544 416.7 544 428v36c0 26.5-21.5 48-48 48H288 80c-26.5 0-48-21.5-48-48V428c0-11.3 4-22.2 11.2-30.9L267.1 130.4 179.7 26.3c-5.7-6.8-4.8-16.9 2-22.5s16.9-4.8 22.5 2L288 105.5 371.7 5.7c5.7-6.8 15.8-7.7 22.5-2zM67.7 417.7c-2.4 2.9-3.7 6.5-3.7 10.3v36c0 8.8 7.2 16 16 16h49.9l1.5-1.9 144-184c3-3.9 7.7-6.1 12.6-6.1s9.6 2.3 12.6 6.1l144 184 1.5 1.9H496c8.8 0 16-7.2 16-16V428c0-3.8-1.3-7.4-3.7-10.3L288 155.3 67.7 417.7zM170.6 480H288 405.4L288 330 170.6 480z" />
		</svg>
	);
}

export function CarMirrors() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
		>
			<path d="M167.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4H378.6c13.6 0 25.7 8.6 30.2 21.4L434.9 192H141.1l26.1-74.6zM32 224h8.6c-5.4 9.4-8.6 20.3-8.6 32V400v48c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V400H448v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V400 256c0-11.7-3.1-22.6-8.6-32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H491.5L469.2 96.3C455.7 57.8 419.4 32 378.6 32H197.4c-40.8 0-77.1 25.8-90.6 64.3L84.5 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32zm64 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
		</svg>
	);
}
export function CircleSmall() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="5px"
			viewBox="0 0 320 512"
			className={css.spacer}
		>
			<path d="M0 256a160 160 0 1 1 320 0A160 160 0 1 1 0 256z" />
		</svg>
	);
}

export function FaceSmilePlus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 640 512"
			className={css.mr5}
		>
			<path d="M560 16V80h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H560v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V112H464c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16zM416 288A192 192 0 1 0 32 288a192 192 0 1 0 384 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zm144.4-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM126.9 330.1c4.5 11.2 15.1 29.1 31.8 44C175.1 388.7 196.8 400 224 400s48.9-11.3 65.3-25.9c16.7-14.9 27.3-32.8 31.8-44c3.3-8.2 12.6-12.2 20.8-8.9s12.2 12.6 8.9 20.8c-6.2 15.4-19.5 37.5-40.2 56C289.8 416.6 260.8 432 224 432s-65.8-15.4-86.7-34.1c-20.7-18.5-34-40.6-40.2-56c-3.3-8.2 .7-17.5 8.9-20.8s17.5 .7 20.8 8.9z" />
		</svg>
	);
}
export function LocationPlus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="16px"
			viewBox="0 0 384 512"
			className={css.mr5}
		>
			<path d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2c10.5 24.8 25.4 52.2 42.5 79.9c28.5 46.2 61.5 90.8 86.2 122.6c24.8-31.8 57.8-76.4 86.2-122.6c17.1-27.7 32-55.1 42.5-79.9C331.5 223.6 336 204.4 336 192zm48 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM168 280V216H104c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V104c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
		</svg>
	);
}
export function MagnifyingGlassLocation() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 512 512"
			className={css.mr5}
		>
			<path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm80-240c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
		</svg>
	);
}
export function Minus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="14px"
			viewBox="0 0 448 512"
			className={css.ac}
		>
			<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
		</svg>
	);
}
export function Plus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="14px"
			viewBox="0 0 448 512"
			className={css.ac}
		>
			<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
		</svg>
	);
}
export function MountainCity() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 640 512"
			className={css.mr5}
		>
			<path d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z" />
		</svg>
	);
}
export function PeopleGroup() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 640 512"
		>
			<path d="M88 88a40 40 0 1 1 80 0A40 40 0 1 1 88 88zm96 0A56 56 0 1 0 72 88a56 56 0 1 0 112 0zm288 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 456 88a56 56 0 1 0 112 0zM64 256c-4.4 0-8 3.6-8 8v98.2c-24.2-16.9-40-45-40-76.7c0-51.7 41.9-93.5 93.5-93.5h36.9c18.8 0 36.3 5.6 51 15.1c3.7-4 7.6-7.8 11.7-11.4c-17.8-12.4-39.4-19.7-62.7-19.7H109.5C49 176 0 225 0 285.5c0 41.1 22.6 76.8 56 95.6V432c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32V403.6c-5.9-6.2-11.3-12.8-16-20V432c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V264c0-4.4-3.6-8-8-8zM440 432c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32V381.1c33.4-18.7 56-54.5 56-95.6C640 225 591 176 530.5 176H493.5c-23.3 0-44.9 7.3-62.7 19.7c4.1 3.6 8 7.4 11.7 11.4c14.7-9.6 32.2-15.1 51-15.1h36.9c51.7 0 93.5 41.9 93.5 93.5c0 31.7-15.8 59.8-40 76.7V264c0-4.4-3.6-8-8-8s-8 3.6-8 8V432c0 8.8-7.2 16-16 16H472c-8.8 0-16-7.2-16-16V383.6c-4.7 7.1-10.1 13.8-16 20V432zM272 96a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM256 272c-4.4 0-8 3.6-8 8v98.2c-24.2-16.9-40-45-40-76.7c0-51.7 41.9-93.5 93.5-93.5h36.9c51.7 0 93.5 41.9 93.5 93.5c0 31.7-15.8 59.8-40 76.7V280c0-4.4-3.6-8-8-8s-8 3.6-8 8V448c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V280c0-4.4-3.6-8-8-8zm-8 125.1V448c0 17.7 14.3 32 32 32h80c17.7 0 32-14.3 32-32V397.1c33.4-18.7 56-54.5 56-95.6C448 241 399 192 338.5 192H301.5C241 192 192 241 192 301.5c0 41.1 22.6 76.8 56 95.6z" />
		</svg>
	);
}
export function PersonCircleMinus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
		>
			<path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zm136 16a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm224 0c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16z" />
		</svg>
	);
}
export function PersonCirclePlus() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
		>
			<path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
		</svg>
	);
}

export function RV() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 640 512"
		>
			<path d="M224 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16V32H512c53 0 96 43 96 96c0 17.7-14.3 32-32 32H384V416H254.4c1 5.2 1.6 10.5 1.6 16c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16H96L18.7 338.7C6.7 326.7 0 310.5 0 293.5V96C0 60.7 28.7 32 64 32H224V16zM112 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H112zm96 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80-48V400 320 288 216 192h24 76.6c12.9 0 25.5 4.5 35.5 12.7l67.4 55.2c13 10.6 20.5 26.5 20.5 43.3V320v64c0 17.7-14.3 32-32 32H574.4c1 5.2 1.6 10.5 1.6 16c0 44.2-35.8 80-80 80s-80-35.8-80-80V416zM578.1 288l-56.5-46.2c-1.4-1.2-3.2-1.8-5.1-1.8H464v48H578.1z" />
		</svg>
	);
}
export function Star() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
		>
			<path d="M288.1 0l63.5 195.6H557.2L390.9 316.4 454.4 512 288.1 391.1 121.7 512l63.5-195.6L18.9 195.6H224.5L288.1 0z" />
		</svg>
	);
}
export function Tent() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 576 512"
		>
			<path d="M269.4 6C280.5-2 295.5-2 306.6 6l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H416L288 288V512H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5L269.4 6z" />
		</svg>
	);
}
export function User() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="20px"
			viewBox="0 0 448 512"
			className={css.mr5}
		>
			<path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7H418.3c7.6 0 13.7-6.1 13.7-13.7C432 392.7 359.3 320 269.7 320H178.3C88.7 320 16 392.7 16 482.3zm-16 0C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
		</svg>
	);
}
export function Square() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			fill="currentColor"
			width="20px"
			className={css.validator}
		>
			<path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
		</svg>
	);
}
export function SquareCheck() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			fill="currentColor"
			width="20px"
			className={`${css.validator} ${css.yes}`}
		>
			<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
		</svg>
	);
}
export function RectangleX() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			width="20px"
			className={`${css.validator} ${css.no}`}
		>
			<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
		</svg>
	);
}
export function HexagonCheck() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			width="20px"
			className={css.yes}
		>
			<path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm319.6-36.7l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 297.4 340.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
		</svg>
	);
}

export function HexagonX() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			width="20px"
			className={css.no}
		>
			<path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32H348.3c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32H163.7c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32L136 431.8c5.7 9.9 16.3 16 27.7 16H348.3c11.4 0 22-6.1 27.7-16L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm137-59.3c6.2-6.2 16.4-6.2 22.6 0L256 233.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z" />
		</svg>
	);
}

export function Road() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			fill="currentColor"
			width="20px"
			className={css.mr5}
		>
			<path d="M185.7 32c-30.4 0-57.5 19-67.7 47.6L8.6 383.6C-8.3 430.5 26.4 480 76.3 480H499.7c49.9 0 84.6-49.5 67.7-96.4L458 79.6C447.7 51 420.6 32 390.3 32H185.7zM163.2 95.9c3.4-9.5 12.5-15.9 22.6-15.9H264v24c0 13.3 10.7 24 24 24s24-10.7 24-24V80h78.3c10.1 0 19.2 6.3 22.6 15.9l109.4 304c5.6 15.6-6 32.1-22.6 32.1H312V408c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H76.3c-16.6 0-28.2-16.5-22.6-32.1l109.4-304zM312 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24V216z" />
		</svg>
	);
}
export function GPS() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			width="20px"
			className={css.mr5}
		>
			<path d="M256 0c8.8 0 16 7.2 16 16V64.7c93.3 7.7 167.6 82.1 175.3 175.3H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H447.3c-7.7 93.3-82.1 167.6-175.3 175.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V447.3C146.7 439.6 72.4 365.3 64.7 272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64.7C72.4 146.7 146.7 72.4 240 64.7V16c0-8.8 7.2-16 16-16zM96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm224 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
		</svg>
	);
}

export function Edit({ review }) {
	const dispatch = useDispatch();
	const showEditModal = (review) => {
		dispatch(currentModal(() => <EditReview review={review} />));
		dispatch(showModal());
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="currentColor"
			width="14px"
			className={css.edit_button}
			onClick={() => showEditModal(review)}
		>
			<path d="M454.6 45.3l12.1 12.1c12.5 12.5 12.5 32.8 0 45.3L440 129.4 382.6 72l26.7-26.7c12.5-12.5 32.8-12.5 45.3 0zM189 265.6l171-171L417.4 152l-171 171c-4.2 4.2-9.6 7.2-15.4 8.6l-65.6 15.1L180.5 281c1.3-5.8 4.3-11.2 8.6-15.4zm197.7-243L166.4 243c-8.5 8.5-14.4 19.2-17.1 30.9l-20.9 90.6c-1.2 5.4 .4 11 4.3 14.9s9.5 5.5 14.9 4.3l90.6-20.9c11.7-2.7 22.4-8.6 30.9-17.1L489.4 125.3c25-25 25-65.5 0-90.5L477.3 22.6c-25-25-65.5-25-90.5 0zM80 64C35.8 64 0 99.8 0 144V432c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z" />
		</svg>
	);
}

export function Delete({ id, spotId }) {
	const dispatch = useDispatch();
	const showDeleteModal = (id) => {
		dispatch(currentModal(() => <DeleteReview id={id} spotId={spotId} />));
		dispatch(showModal());
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			fill="currentColor"
			width="14px"
			className={css.delete_button}
			onClick={() => showDeleteModal(id)}
		>
			<path d="M164.2 39.5L148.9 64H299.1L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5H177.7c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64H384h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H416V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16H32 64h47.1L137 22.6C145.8 8.5 161.2 0 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM64 96V432c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V96H64zm80 80V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
		</svg>
	);
}