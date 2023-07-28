const formsToSubmitNodeList = document.querySelectorAll('.child-form');
const formsToSubmit = [...formsToSubmitNodeList];

formsToSubmit.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [giftID, childID] = JSON.parse(event.target.gift.value);
    const newChildData = {
      giftId: giftID,
    };
    const response = await fetch(
      `/children/${childID}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newChildData),
      },
    );
    if (response.status !== 200) {
      throw new Error('something wet wrong with PATCHing child gift');
    }
  });
});
