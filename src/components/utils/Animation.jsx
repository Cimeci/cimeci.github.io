export class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "!<>-_\\/[]{}—=+*^?#________";
		this.update = this.update.bind(this);
	}

	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(res => (this.resolve = res));
		this.queue = [];

		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}

		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}

	update() {
		let output = "";
		let complete = 0;

		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end } = this.queue[i];
			let char;

			if (this.frame >= end) {
				complete++;
				char = to;
			} else if (this.frame >= start) {
				char = this.randomChar();
			} else {
				char = from;
			}

			output += char;
		}

		this.el.innerText = output;

		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}

	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}