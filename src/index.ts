import { log } from "@/utils";

const elements: NodeListOf<HTMLElement> = document.querySelectorAll("*");
for (const element of elements) {
	element.style.setProperty("outline", "3px solid limegreen");
}

log("Hello world!");
