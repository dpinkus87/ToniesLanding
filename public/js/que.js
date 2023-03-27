const UserQue = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const user_id = document.querySelector("#que-feed").getAttribute("data-user-id")
        const que_id = event.target.getAttribute("data-id")
        const response = await fetch(`/que`, {
            method: 'GET',
            body: JSON.stringify({
                user_id, que_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/que');
        } else {
            alert('Failed to get que');
        }
    }
};

document.querySelector("#que-feed")
    .addEventListener('click', UserQue);
