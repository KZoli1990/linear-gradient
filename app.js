const bg = document.getElementById('bg');
        const table = document.getElementById('table');
        let count = 0;
        const colorArray = [];

        document.getElementById('bgBtn').addEventListener('click', () => {
            const rgb1 = Math.floor(Math.random() * 255);
            const rgb2 = Math.floor(Math.random() * 255);
            const rgb3 = Math.floor(Math.random() * 255);
            const rgb4 = Math.floor(Math.random() * 255);
            const rgb5 = Math.floor(Math.random() * 255);
            const rgb6 = Math.floor(Math.random() * 255);

            bg.style.background = `linear-gradient(to right, rgb(${rgb1},${rgb2},${rgb3}), rgb(${rgb4},${rgb5},${rgb6}))`;

            document.getElementById('bgText').innerHTML = 'Aktuális szín összekeverés :';
            document.getElementById('rgbColor').innerHTML = `Első szín: rgb(${rgb1},${rgb2},${rgb3}) || Második szín: rgb(${rgb4},${rgb5},${rgb6})`;
            box1.classList.add('box');
            box1.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
            box2.classList.add('box');
            box2.style.background = `rgb(${rgb4},${rgb5},${rgb6})`;
            colorArray.push({color1:`rgb(${rgb1},${rgb2},${rgb3})`, color2:`rgb(${rgb4},${rgb5},${rgb6})`, linear:`linear-gradient(to right, rgb(${rgb1},${rgb2},${rgb3}), rgb(${rgb4},${rgb5},${rgb6}))`});
            count++;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <tr>
                <td id='primaryColor${count}'>rgb(${rgb1},${rgb2},${rgb3})</td>
                <td id='secondaryColor${count}'>rgb(${rgb4},${rgb5},${rgb6})</td>
                <td id='linearGradient${count}'>to right, rgb(${rgb1},${rgb2},${rgb3}), rgb(${rgb4},${rgb5},${rgb6}))</td>
            </tr>
            `
            table.appendChild(tr)
            const color1 = document.getElementById(`primaryColor${count}`);
            const color2 = document.getElementById(`secondaryColor${count}`);
            const linear = document.getElementById(`linearGradient${count}`);
            color1.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
            color2.style.background = `rgb(${rgb4},${rgb5},${rgb6})`;
            linear.style.background = `linear-gradient(to right, rgb(${rgb1},${rgb2},${rgb3}), rgb(${rgb4},${rgb5},${rgb6}))`;

            tr.addEventListener('click', () => {
                tr.style.textDecoration = 'line-through';
            });

            tr.addEventListener('dblclick', () => {
                table.removeChild(tr);
            })
        });

        console.log(colorArray);
        