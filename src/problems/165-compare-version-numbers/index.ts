function compareVersion(version1: string, version2: string): number {
	const rvs1 = version1.split(".");
	const rvs2 = version2.split(".");

	for (let i = 0; i < rvs1.length || i < rvs2.length; i++) {
		const rv1 = rvs1[i] ? Number(rvs1[i]) : 0;
		const rv2 = rvs2[i] ? Number(rvs2[i]) : 0;

		if (rv1 > rv2) {
			return 1;
		} else if (rv1 < rv2) {
			return -1;
		}
	}

	return 0;
}
