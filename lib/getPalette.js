function getData() {
	// return ["#cccccc", "#900455", "#0055ff"];
	return "hello"; // we'll come back to this..
}

module.exports = function () {
	var palette = getData();

	if (!Array.isArray(palette)) {
		throw new Error('Palette is not an array');
	}

	return palette;
};
