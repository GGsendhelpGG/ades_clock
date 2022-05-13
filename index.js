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
        document.title = "ades_Clock";

		document.body.innerHTML = `
            <h1>clock</h1>
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
                </tbody>
            </table>
        `;
	}
});
