import { extension, Banner, Checkbox, Select, TextField } from "@shopify/ui-extensions/checkout";

export default extension("purchase.checkout.block.render", (root, api) => {
  const { extension, i18n } = api;

  let isCheckboxSelected = false;

  // Crear un componente de banner y agregarlo al nodo root
  const bannerComponent = root.createComponent(
    Banner,
    { title: "checkout-ui" },
    i18n.translate('welcome', {target: extension.target})
  );
  root.appendChild(bannerComponent);

  // Crear un componente de checkbox y agregarlo al nodo root
  const checkboxComponent = root.createComponent(
    Checkbox,
    {
      id: 'checkbox',
      name: 'checkbox',
      onChange: () => {
        // Actualizar el estado cuando el checkbox cambia
        isCheckboxSelected = !isCheckboxSelected;

        if(isCheckboxSelected){
          root.appendChild(textFieldComponentNombreRazonSocial);
          root.appendChild(textFieldComponentRFC);
          root.appendChild(textFieldComponentCodigoPostal);
          root.appendChild(selectComponentRegimenFiscal);
          root.appendChild(selectComponentTipoPersona);
        } else{
          root.removeChild(textFieldComponentNombreRazonSocial);
          root.removeChild(textFieldComponentRFC)
          root.removeChild(textFieldComponentCodigoPostal);
          root.removeChild(selectComponentRegimenFiscal);
          root.removeChild(selectComponentTipoPersona);
        }

        // Mostrar u ocultar los componentes adicionales según el estado
       
      },
    },
    'Deseas facturar?'
  );
  root.appendChild(checkboxComponent);

  // Crear componentes de TextField y agregarlos al nodo root (inicialmente ocultos)
  const textFieldComponentRFC = root.createComponent(
    TextField,
    {
      id: 'RFC',
      label: 'RFC',
      
    }
  );
 

  const textFieldComponentCodigoPostal = root.createComponent(
    TextField,
    {
      id: 'Codigo_postal',
      label: 'Codigo postal',
      
    }
  );
 

  const textFieldComponentNombreRazonSocial = root.createComponent(
    TextField,
    {
      id: 'Nombre_Razon_Social',
      label: 'Nombre o razón social',
     
    }
  );
 

  // Crear componentes de Select y agregarlos al nodo root (inicialmente ocultos)
  const selectComponentRegimenFiscal = root.createComponent(
    Select,
    {
      label: 'Regimen fiscal',
      value: '1',
      options: [
        { value: '601', label: '601 General de Ley Personas Morales' },
        { value: '603', label: '603 Personas Morales con Fines no Lucrativos' },
        { value: '605', label: '605 Sueldos y Salarios e Ingresos Asimilados a Salarios' },
        { value: '606', label: '606 Arrendamiento' },
        { value: '607', label: '607 Régimen de Enajenación o Adquisición de Bienes' },
        { value: '608', label: '608 Demás ingresos' },
      ],
      
    }
  );
 

  const selectComponentTipoPersona = root.createComponent(
    Select,
    {
      label: 'Tipo de Persona',
      value: '1',
      options: [
        { value: 'fisica', label: 'Soy persona fisica' },
        { value: 'moral', label: 'Soy persona moral' },
      ],
      
    }
  );
  
});
