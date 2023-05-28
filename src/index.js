const CardSection = document.querySelector('.card-list');

const BAZE_URL = 'https://voodoo-sandbox.myshopify.com/';

export async function getData() {
  const response = await axios.get(`${BAZE_URL}products.json?limit=13`);
  const data = await response.data;
  return data.products;
}

function createCardList() {
  getData()
    .then(resp => createMarkup(resp))
    .catch(err => console.log(err));
}

function createMarkup(data) {
  const markup = data
    .slice(1)
    .map(({ title, images, variants }) => {
      return `<li class="w-[342px] lg:w-[300px] h-[402px] relative">

         <div class="w-[47px] h-[24px] bg-mainTextColor text-secondTextColor rounded absolute top-3 left-3 p-2 font-normal text-[12px] leading-[15px] flex items-center justify-center">
              USED
            </div>
            <img src="${
              images[0].src
            }" alt="card" width="342px" height="300px" class="border border-black rounded">
            <div class="flex justify-between mb-3">

              <div class="flex flex-col">
                <span>${title.slice(8, 20)}</span>
                <span>${variants[0].price} KR.</span>
              </div>

              <div class="flex flex-col items-end">
                <span>Condition</span>
                <span>Slightly used</span>
              </div>
            </div>

            <button class="w-[342px] h-[42px] bg-mainTextColor text-secondTextColor rounded lg:hidden">
              PICK-UP IN <span class="underline ">2200</span>
            </button>

           
          </li>`;
    })
    .join('');

  CardSection.innerHTML = markup;
}

createCardList();
