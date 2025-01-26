async function twoFactorAuthVerifyLogin(event) {
	if (event === undefined || event === null) { return 1; }
	try {
		event.preventDefault();
	} catch (error) { return 1; }
	let csrftoken = Cookies.get('csrftoken');
	if (csrftoken === undefined || csrftoken === null) { return 1; }
	const form_data = new FormData(event.target);
	const response = await fetch(`${projectURL}/control/two-factor-auth-verify-login/`, {
		method: 'POST',
		headers: { 'X-CSRFToken': csrftoken, },
		body: form_data,
	});
	const response_text = await response.text();
	if (!response.ok) {
		try {
			const json_data = JSON.parse(response_text);
			return showErrors(event, json_data, 'twofactorauthverifylogin_error');
		} catch (error) { return 1; }
	}
	try {
		const json_data = JSON.parse(response_text);
		removeError('twofactorauthverifylogin_error');
		closeModal(event, 'twoFactorAuthVerifyLoginModal');
		await updateSocket();
		await changePage(event, '/', 'index/', false);
		changeStatusAndTitle(event, json_data);
		return 0;
	} catch (error) { return 1; }
}
