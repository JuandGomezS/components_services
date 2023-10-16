# Componentes

Son porciones del proyecto que son reutilizables y solicitados bajo demanda.


Cómo crearlos: 

```
ng g c <directorio/nombreComponente>
```
Un componente sólo puede pertenecer a un módulo

## Partes de un componente

El archivo con la extensión .ts es el componente principal de cualquier Angular.
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-name',
  templateUrl: './test-name.component.html',
  styleUrls: ['./test-name.component.scss']
})
export class TestNameComponent {
    ...
}

```
Observa lo más importante, el decorador @Component().

Los decoradores alteran el comportamiento de una clase en Angular, para que el compilador de TypeScript interprete el código de la manera correcta y sepa que una clase es:

* Un componente.
* Un módulo.
* Un servicio.
* Una directiva, etc.

Este decorador es quién enlaza el componente con el archivo HTML y la hoja de estilos, además le otorga al componente un selector o un nombre para utilizarlo en tus templates.

# Inputs

Para comunicar componentes, Angular hace uso de decoradores para intercambiar información entre un componente padre hacia un componente hijo y viceversa.

Comunicando componentes
Para enviar información de padre a hijo, puedes utilizar el decorador @Input() para marcar una propiedad de una clase como punto de entrada de un dato.

```
<p style=‘text-align:center;’>
<img src=“https://static.platzi.com/media/articlases/Images/Screenshot from 2022-04-05 22-42-58.png” alt=“Envio de datos componente padre a hijo”>
</p>
```
```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-name',
  templateUrl: './test-name.component.html',
  styleUrls: ['./test-name.component.less']
})
export class TestNameComponent {

  @Input() firstname: string;

  constructor() { }
}
```
Debes importar Input desde @angular/core para poder utilizar esta directiva e indicar que la propiedad firstname es un dato que el componente padre enviará.

Podrás inicializar el componente desde su padre y pasarle los inputs que este necesite de la siguiente manera:
```
<app-test-name>
    firstname="Platzi"
</app-test-name>
```
También puedes cambiar el nombre el Input especificando el nombre de la propiedad que quieras que este utilice al inicializar el componente.

```
@Input('my-name') firstname: string;
```

    <app-test-name>
        my-name="Platzi"
    </app-test-name>

## Data binding en Inputs

El decorador @Input() detectará cualquier cambio en el dato y automáticamente actualizará su valor. Si ocurre algún evento en el componente padre que cambie el valor en el Input firstname, el componente hijo recibirá inmediatamente ese nuevo valor.

Input Set
Otra manera de utilizar la directiva @Input es de la siguiente manera:

    @Input() set saludar(firstname: string) {
        console.log('Hola', firstname)
    };

Observa que en esta oportunidad, cada vez que se envía un valor al @Input, se ejecutará la función saludar() que recibe como parámetro el valor que se le haya enviado.

De esta manera, puedes ejecutar la lógica que necesites dentro de esta función cada vez que el valor del @Inputcambia.