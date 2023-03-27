

const addToQue = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const user_id = document.querySelector('#que-list').getAttribute("data-user-id")
        const products_id = event.target.getAttribute("data-id")
        const response = await fetch(`/que`, {
            method: 'POST',
            body: JSON.stringify({
                user_id, products_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/cart');
        } else {
            alert('Failed to add Tonie to que');
        }
    }
};

document.querySelector("#que-feed").addEventListener('click', addToQue);