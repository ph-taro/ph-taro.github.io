async function loadWorks() {
  const response = await fetch('works.csv');
  const text = await response.text();

  const rows = text.trim().split('\n').slice(1); // ヘッダー除外
  const worksList = document.getElementById('works-list');

  rows.forEach(row => {
    const [image, title, roles, url] = row.split(',');

    const item = document.createElement('div');
    item.className = 'work-item';

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = `担当: ${roles}`;

    item.appendChild(img);
    item.appendChild(h3);
    item.appendChild(p);

    if (url && url !== 'undefined') {
      const link = document.createElement('a');
      link.href = url;
      link.textContent = "サイトを見る";
      link.target = "_blank";
      item.appendChild(link);
    }

    worksList.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', loadWorks);
