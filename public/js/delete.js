const removeFromQue = 
async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const tonies_id = event.target.getAttribute('data-id')
        const response = await 
        fetch('/public/js/que.js', {
            method: 'DELETE',
            body: JSON.stringify({tonies_id}),
            headers: {
                'Content-Type':
                'application/json' },
        });

        if (response.ok) {
            document.location.replace('./que.js');
        } else {
            alert('Failed to delete item');
        }
    }
};

document.addEventListener('click', removeFromQue);