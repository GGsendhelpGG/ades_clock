const params = new URLSearchParams(window.location.search);
const id = params.get("h9x97e36");

// Thanks to https://stackoverflow.com/a/52171480
const cyrb53 = function (str, seed = 0) {
	let h1 = 0xdeadbeef ^ seed,
		h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 =
		Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
		Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 =
		Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
		Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

window.addEventListener("DOMContentLoaded", function () {
	if (id != null && cyrb53(id) + "" === "8461277072213326") {
        document.title = "clok";

		document.body.innerHTML = `
            <h1>clok</h1>
            <p class="subtitle">jcjc21 / clok</p>

            <table>
                <thead>
                    <tr>
                        <th>Function</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr tabindex=0>
                        <td>Date.now()</td>
                        <td><span id="clok">${Date.now()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.toLocaleString()</td>
                        <td><span id="clok">${new Date().toLocaleString()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.toISOString()</td>
                        <td><span id="clok">${new Date().toISOString()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.getDate()</td>
                        <td><span id="clok">${new Date().getDate()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.getDay()</td>
                        <td><span id="clok">${new Date().getDay()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.getMonth()</td>
                        <td><span id="clok">${new Date().getMonth()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.getFullYear()</td>
                        <td><span id="clok">${new Date().getFullYear()}</span></td>
                    </tr>
                    <tr tabindex=0>
                        <td>Date.getTimezoneOffset()</td>
                        <td><span id="clok">${new Date().getTimezoneOffset()}</span></td>
                    </tr>
                </tbody>
            </table>

            <details>
                <h3>How?</h3>
                <p>Open Inspector and take a peek at <code>index.js</code>.</p>

                <h3>Interesting bits</h3>
                <p>This page loads its content depending on the query parameters it recieves. It converts the value into a hash and compares it with the correct hash, and then populates the page with the correct content if the hashes match.</p>
                <p>The hash function used is <strong>cyrb53</strong>, taken from an <a href="https://stackoverflow.com/a/52171480">StackOverflow answer</a>.</p>
                <p>This method allows me to directly insert JavaScript functions and values into the HTML markup, as it is loaded into <code>innerHTML</code> as a string.</p>
            </details>

            <div class="buttons">
                <a class="button" href="https://github.com/jcjc21/clok" target="_blank">GitHub</a>
            </div>
        `;
	}
});
