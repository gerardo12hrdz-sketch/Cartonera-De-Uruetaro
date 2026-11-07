// Número oficial de WhatsApp: 443 182 6336
const numeroWhatsApp = "524431826336";

// 1. Cotizar desde formulario principal
document.getElementById('form-cotizacion').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const producto = document.getElementById('producto-select').value;
    const mensaje = document.getElementById('mensaje').value || "Sin detalles adicionales";

    const textoWhatsApp = `Hola, mi nombre o empresa es *${nombre}*.%0A%0A` +
                            `Solicito cotización del siguiente producto:%0A` +
                            `📌 *Producto:* ${producto}%0A` +
                            `📝 *Detalles:* ${mensaje}%0A%0A` +
                            `📞 *Mi número de contacto:* ${telefono}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
});

// 2. Solicitar llamada desde formulario
document.getElementById('btn-solicitar-llamada-form').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    if (!nombre || !telefono) {
        alert("Por favor escribe tu Nombre y Teléfono en el formulario para solicitar la llamada.");
        return;
    }

    const textoWhatsApp = `SOLICITUD DE LLAMADA TELEFÓNICA 📞%0A%0A` +
                            `Hola, mi nombre es *${nombre}*.%0A` +
                            `Solicito que por favor me llamen a este número: *${telefono}* para recibir asesoría sobre sus materiales.`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`, '_blank');
});

// 3. Botón "Solicitar llamada" del Banner
document.getElementById('btn-solicitar-llamada-hero').addEventListener('click', function() {
    const textoWhatsApp = `Hola, solicito que me realicen una llamada telefónica para solicitar información de sus materiales.`;
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