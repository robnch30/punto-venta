# Administrador de punto de venta.

## La aplicación trata de administrar cualquier negocio, ya sea que venda productos o brinde servicios. Para esta entrega solo se compromete lo siguiente:

Registro de productos o servicios.
La aplicación debe registrar productos con los siguientes datos

código de barras: identificador único del producto o servicio. 
Nombre: Nombre del producto o servicio.
precio de venta: Precio o costo de venta.
precio de compra: Precio o costo de compra
proveedor: número identificador del proveedor (Opcional).
departamento: nùmero identificador del departamento (Opcional)
Impuesto: Lista de impuestos que le aplican el producto o servicio (Opcional).
Inventario: Cantidad de productos o recursos disponibles.

Registro existente de producto y/o servicio.
Si ya existe un producto o servicio en los registros con el mismo código de barras se puede modificar los datos:

Nombre: Nombre del producto o servicio.
precio de venta: Precio o costo de venta.
precio de compra: Precio o costo de compra
proveedor: número identificador del proveedor 
departamento: nùmero identificador del departamento 
Impuesto: Lista de impuestos que le aplican el producto o servicio 
Inventario: Cantidad de productos o recursos disponibles
Para la midificaciòn los campos son opcionales.

Venta de productos o servicios.
La aplicación debe de realizar la captura de los productos y/o servicios que el usuario compró.
Solo se agregaran productos existentes en la BD. al no existir el producto se mandará un error.
La búsqueda del producto solo será por el código de barras.
El formato de la venta o lista de compra será

numero de tiket
Cantidad
Código de barras
Nombre del producto
Precio Unitario
Total por producto
Total a pagar.

Registro de proveedores
Se deben de registrar los datos de los proveedores:

Nombre del proveedor
Compañia
RFC
Domicilio Calle
Còdigo postal
Colonia 
