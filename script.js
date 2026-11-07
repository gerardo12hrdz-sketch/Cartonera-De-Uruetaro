// 2. Solicitar llamada desde formulario
document.getElementById('btn-solicitar-llamada-form').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const poblacion = document.getElementById('poblacion').value;

    if (!nombre || !telefono || !poblacion) {
        alert("Por favor llena Tu Nombre, Teléfono y Población para solicitar la llamada.");
        return;
    }

    const textoWhatsApp = `SOLICITUD DE LLAMADA TELEFÓNICA 📞%0A%0A` +
                            `Hola, mi nombre es *${nombre}*.%0A` +
                            `📍 *Población:* ${poblacion}%0A` +
                            `Solicito que me llamen al número *${telefono}* para recibir información y cotizar materiales.`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
});

// 3. Botón "Solicitar llamada" del Banner
document.getElementById('btn-solicitar-llamada-hero').addEventListener('click', function() {
    const textoWhatsApp = `Hola, solicito que me realicen una llamada telefónica para información de sus materiales.`;
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
});

// 4. Cotización rápida por producto en catálogo
const botonesCotizarItems = document.querySelectorAll('.btn-cotizar-item');
botonesCotizarItems.forEach(boton => {
    boton.addEventListener('click', function() {
        const productoNombre = this.getAttribute('data-producto');
        const textoWhatsApp = `Hola, solicito información y cotización directa del producto: *${productoNombre}*.`;
        window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
    });
});
