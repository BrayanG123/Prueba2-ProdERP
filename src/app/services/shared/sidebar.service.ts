import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    // {
    //   titulo: 'Inicio',
    //   icono: 'fa fa-home nav-icon',
    //   submenu: [
    //     { titulo: 'hacer', url: '/dashboard' },
    //     { titulo: 'hacer', url: '/dashboard' },
    //   ]
    // },
    {
      titulo: 'Usuarios',
      icono: 'fa fa-user nav-icon',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Nuevo', url: '/usuarios-nuevo' },
      ]
    },
    
    {
      titulo: 'Compras',   //<------------------ AQUI
      icono: 'fa fa-shopping-cart nav-icon',
      submenu: [
        { titulo: 'compras', url: '/compras' },
        { titulo: 'nuevo', url: '/comprasnuevo' },
      ]
    },
    {
      titulo: 'Proveedores', //<------------------ AQUI
      icono: 'fa fa-truck nav-icon',
      submenu: [
        { titulo: 'proveedores', url: '/proveedores' },
        { titulo: 'nuevo', url: '/proveedorcrear' },
      ]
    },
    {
      titulo: 'Categorias', //<------------------ AQUI
      icono: 'fas fa-truck-moving nav-icon',
      submenu: [
        { titulo: 'categorias', url: '/categorias' },
        { titulo: 'nuevo', url: '/categorianuevo' },
      ]
    },

    {
      titulo: 'Productos',
      icono: 'fas fa-capsules nav-icon',
      submenu: [
        { titulo: 'productos', url: '/producto' },
        { titulo: 'nuevo', url: '/productonuevo' },
      ]
    },
    {
      titulo: 'Clientes',
      icono: 'fas fa-handshake nav-icon',
      submenu: [
        { titulo: 'Clientes', url: '/clientes' },
        { titulo: 'Nuevo', url: '/clientes-nuevo' },
      ]
    },
    {
      titulo: 'Empleados',
      icono: 'fas fa-id-card-alt nav-icon',
      submenu: [
        { titulo: 'Empleados', url: '/empleados' },
        { titulo: 'Nuevo', url: '/empleados-nuevo' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'fas fa-cash-register nav-icon',
      submenu: [
        { titulo: 'Ventas', url: '/ventas' },
        { titulo: 'Nuevo', url: '/ventas-nuevo' },
      ]
    },
    {
      titulo: 'Reportes',
      icono: 'fas fa-file-invoice-dollar nav-icon',
      submenu: [
        { titulo: 'Bitacora', url: '/activities' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Almacenes',
      icono: 'fas fa-store nav-icon',
      submenu: [
        { titulo: 'almacenes', url: '/almacenes' },
        { titulo: 'nuevo', url: '/almacenes-nuevo' },
      ]
    },
    {
      titulo: 'Departamentos',
      icono: 'fas fa-store nav-icon',
      submenu: [
        { titulo: 'departamentos', url: '/dptos' },
        { titulo: 'nuevo', url: '/dptos-nuevo' },
      ]
    },
    {
      titulo: 'Sucursales',
      icono: 'fas fa-store nav-icon',
      submenu: [
        { titulo: 'Sucursales', url: '/sucursal' },
        { titulo: 'nuevo', url: '/sucursal-nuevo' },
      ]
    },
    {
      titulo: 'Config',
      icono: 'fa fa-wrench nav-icon',
      submenu: [
        { titulo: 'configuracion', url: '/account-settings' },
      ]
    },
    // {
    //   titulo: 'Cerrar Sesion',
    //   icono: 'fa fa-wrench nav-icon',
    //   submenu: [
    //     { titulo: 'Logout', url: '/login' },
    //   ]
    // },

  ];

  constructor() { }
}
