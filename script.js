let redeIps = [
    { ip: "192.168.0.10", mask: "255.255.255.0", version: "v4" },
    { ip: "192.168.0.7", mask: "255.255.255.0", version: "v4" },
    { ip: "192.168.0.5", mask: "255.255.255.0", version: "v4" }
];

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    redeIps.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.ip}</td>
            <td>${item.mask}</td>
            <td>${item.version}</td>
            <td>
                <button class="btn-edit" onclick="editarIP(${index})">EDIT</button>
                <button class="btn-del" onclick="excluirIP(${index})">DEL</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function adicionarIP() {
    const ip = document.getElementById('ipInput').value;
    const mask = document.getElementById('maskInput').value;
    const version = document.getElementById('versionInput').value;

    if (ip && mask) {
        redeIps.push({ ip, mask, version });
        renderTable();
        // Limpar campos
        document.getElementById('ipInput').value = '';
        document.getElementById('maskInput').value = '';
    } else {
        alert("ERRO: Campos obrigatórios vazios.");
    }
}

function excluirIP(index) {
    if(confirm("Confirmar exclusão do registro?")) {
        redeIps.splice(index, 1);
        renderTable();
    }
}

function editarIP(index) {
    const novoIp = prompt("Editar IP:", redeIps[index].ip);
    const novaMask = prompt("Editar MASK:", redeIps[index].mask);
    
    if (novoIp && novaMask) {
        redeIps[index].ip = novoIp;
        redeIps[index].mask = novaMask;
        renderTable();
    }
}

renderTable();