import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Tests for <AddCategory />', () => { 
    test('should change the value of the input', () => { 
        render(<AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target:{value:'Saitama'}});
        expect(input.value).toBe('Saitama');
    })

    test('should call onNewCategory if the input has a value', () => { 
        const inputValue = 'Saitama';
        //Uso de jest.fn() esto es una funcion ficticia de jest
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        //Llamar al input
        const input = screen.getByRole('textbox');

        //Llamar al form
        const form = screen.getByRole('form');

        //Disparar evento de onChange en el input (simular) ingreso de texto
        fireEvent.input(input, {target:{value:inputValue}});

        //Disparar evento de submit del form
        fireEvent.submit(form);

        //Esperar que el input se ponga vacio una vez enviado el formulario
        expect(input.value).toBe('');

        //Verificar que la funcion onNewCategory haya sido llamada al menos una vez
        expect(onNewCategory).toHaveBeenCalled();

        //Verificar que la funcion onNewCategory haya sido llamada con el valor de inputValue que ingresamos
        expect(onNewCategory).toHaveBeenNthCalledWith(1,inputValue);
    });


    test('should not call the onNewCategory function', () => { 
        const inputValue = 'Y';
        //Uso de jest.fn() esto es una funcion ficticia de jest
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        //Llamar al input
        const input = screen.getByRole('textbox');

        //Llamar al form
        const form = screen.getByRole('form');

        //Disparar evento de onChange en el input (simular) ingreso de texto
        fireEvent.input(input, {target:{value:inputValue}});

        //Disparar evento de submit del form
        fireEvent.submit(form);

        //Esperar que el input se mantenga igual ya que no se envio el contenido
        expect(input.value).toBe(inputValue);

        //Verificar que la funcion onNewCategory no haya sido llamada 
        expect(onNewCategory).not.toHaveBeenCalled();

     })

})