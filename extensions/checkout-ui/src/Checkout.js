import { extension, Banner, Select, TextField, Checkbox } from "@shopify/ui-extensions/checkout";

export default extension("purchase.checkout.block.render", (root, api) => {
  const { extension, i18n } = api;

  // Estado para mantener los valores de los campos y selects
  const state = {
    RFC: "",
    Codigo_postal: "",
    Nombre_Razon_Social: "",
    Regimen_Fiscal: "1", // Valor predeterminado
    Tipo_Persona: "1", // Valor predeterminado
  };

  // Función para aplicar cambios a los metafields
  const applyMetafieldChange = (key, value) => {
    // Obtener la información actual de los metafields
    const currentMetafields = api.metafields.current;

    // Verificar si el metafield ya existe
    const existingMetafield = currentMetafields.find(metafield => metafield.key === key);

    // Crear o actualizar el metafield
    if (existingMetafield) {
      api.metafields.update({
        namespace: "philco", 
        key: key,
        value: value,
        type: 'string'
      });
    } else {
      api.metafields.create({
        namespace: "philco", 
        key: key,
        value: value,
        type: 'string'
      });
    }
  };

  let isCheckboxSelected = false; 

  // Crear un componente de banner y agregarlo al nodo root
  const bannerComponent = root.createComponent(
    Banner,
    { title: "checkout-ui" },
    i18n.translate('welcome', {target: extension.target})
  );
  root.appendChild(bannerComponent);

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

  // Crear componentes de TextField y agregarlos al nodo root
  const textFieldComponentRFC = root.createComponent(
    TextField,
    {
      id: 'RFC',
      label: 'RFC',
      onChange: (value) => {
        // Actualizar el estado cuando el valor cambia
        state.RFC = value;
        // Guardar en el metafield
        applyMetafieldChange("RFC", value);
      },
    }
  );

  const textFieldComponentCodigoPostal = root.createComponent(
    TextField,
    {
      id: 'Codigo_postal',
      label: 'Codigo postal',
      onChange: (value) => {
        state.Codigo_postal = value;
        applyMetafieldChange("Codigo_postal", value);
      },
    }
  );

  const textFieldComponentNombreRazonSocial = root.createComponent(
    TextField,
    {
      id: 'Nombre_Razon_Social',
      label: 'Nombre o razón social',
      onChange: (value) => {
        state.Nombre_Razon_Social = value;
        applyMetafieldChange("Nombre_Razon_Social", value);
      },
    }
  );

  // Crear componentes de Select y agregarlos al nodo root
  const selectComponentRegimenFiscal = root.createComponent(
    Select,
    {
      label: 'Regimen fiscal',
      value: state.Regimen_Fiscal,
      options: [
        { value: '601', label: '601 General de Ley Personas Morales' },
        { value: '603', label: '603 Personas Morales con Fines no Lucrativos' },
        { value: '605', label: '605 Sueldos y Salarios e Ingresos Asimilados a Salarios' },
        { value: '606', label: '606 Arrendamiento' },
        { value: '607', label: '607 Régimen de Enajenación o Adquisición de Bienes' },
        { value: '608', label: '608 Demás ingresos' },
      ],
      onChange: (value) => {
        state.Regimen_Fiscal = value;
        applyMetafieldChange("Regimen_Fiscal", value);
      },
    }
  );

  const selectComponentTipoPersona = root.createComponent(
    Select,
    {
      label: 'Tipo de Persona',
      value: state.Tipo_Persona,
      options: [
        { value: 'fisica', label: 'Soy persona fisica' },
        { value: 'moral', label: 'Soy persona moral' },
      ],
      onChange: (value) => {
        state.Tipo_Persona = value;
        applyMetafieldChange("Tipo_Persona", value);
      },
    }
  );

  // Agregar los componentes al nodo root inicialmente según el estado
  if (isCheckboxSelected) {
    root.appendChild(textFieldComponentNombreRazonSocial);
    root.appendChild(textFieldComponentRFC);
    root.appendChild(textFieldComponentCodigoPostal);
    root.appendChild(selectComponentRegimenFiscal);
    root.appendChild(selectComponentTipoPersona);
  }

});
