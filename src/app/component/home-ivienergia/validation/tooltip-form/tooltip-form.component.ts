import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ConsumoApiService } from '../../shared/consumo-api.service';
import { ListaTitle } from '../../shared/lista-title';


import { City, Developer, EnviarDados, EstadoCidade, State, Utilitys, UtilitysState, userRegistro } from '../../shared/single.model';

import { SimpleModalComponent } from '../../basic-modal/simple-modal/simple-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-form',
  templateUrl: './tooltip-form.component.html',
  styleUrls: ['./tooltip-form.component.scss']
})
export class TooltipFormComponent {
  public validate = false;
  loading = false;
  titleForm = new ListaTitle()
   formularioPreCadastro: FormGroup | any;
   developer: Developer[];
  //  NamDeveloper: 
   //cities: any[];
   utilitys: any[];
   State: State[];
  
   Listcities: EstadoCidade;
   Listutility: UtilitysState;
   utility : Utilitys[]
   selectedState: any | null = null;
   selectedCity: number | null = null;

   cidades: any[] = [];
   estados: any[] = [];
   estadoSelecionado: any[] = [];

   NovasCidades: (EstadoCidade)[] = [];
   stateCity: State[] = [];
  usuarioRegistro: number;
  //usuario: userRegistro[];
  usuario: userRegistro = { id: 0, name: '', userRegistrationId: 0 };
  model = {} as EnviarDados;

  isLoading = false;
  NewCities: EstadoCidade | any ;
  Distribuidora: UtilitysState | any;
  constructor(
    private formBuilder: FormBuilder, 
    private apiConsumoService: ConsumoApiService,
    private modal : NgbModal,
    
    ) {
      
    
    }

  ngOnInit(): void {


    this.formularioPreCadastro = this.formBuilder.group({
      NameProjectDevelop: ['', Validators.required],
      CityId: [0, Validators.required],
      DeveloperId: [0, Validators.required],
      NumberCapacityKwac: ['', [Validators.required, Validators.min(500), Validators.max(5000)]],
      IsAccessOpinion: [Boolean, Validators.required],
      UtilityId: [0, Validators.required],
      state: [0],
      UserRegistrationId: [1, Validators.required],
      ProjetoReferencia: ['']
      
    });
    this.deveLoper();
    this.getEstados(); 
    this.getStatus();
   
  }
  
  public submit() {
    //this.validate = !this.validate;
  }


  
 
  get stateControl() {
    return this.formularioPreCadastro.get('state');
  }

  onStateChange(): void {
    const selectedStateId = this.formularioPreCadastro.get('state').value;
    
    console.log(selectedStateId, 'Selecionar Estado')
    if (selectedStateId) {
      this.apiConsumoService.chamadaOnChange(selectedStateId).subscribe({
        next: (result) => {
          console.log('Dados do backend:', result);
          const cityData: EstadoCidade = result.cities;
          this.NewCities = cityData;

          console.log('NewCities:', this.NewCities);
          console.log('NewCities.cities:', this.NewCities?.cities);

          const utilityData: UtilitysState = result.utilitys;
          this.Distribuidora = utilityData
          console.log('Distribuidora:', this.Distribuidora);
          console.log('Distribuidora.utilitys:', this.Distribuidora?.utilitys);
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            this.formularioPreCadastro.get('CityId').enable();
            this.formularioPreCadastro.get('UtilityId').enable();
          }, 1000)
        },
        
        error: (error) => {
          console.log('Erro ao obter cidades pelo estado', error);
          setTimeout(() => {
            this.isLoading = false;
            this.formularioPreCadastro.get('CityId').disable();
            this.formularioPreCadastro.get('UtilityId').disable();
          }, 1000)
        }
      });
    } else {

      setTimeout(() => {
        this.isLoading = false;
        this.formularioPreCadastro.get('CityId').disable();
        this.formularioPreCadastro.get('UtilityId').disable();
      }, 1000)
    }
  }
  


  getEstados() {
    this.apiConsumoService.getStates().subscribe({
      next: (states: State[]) => {
        this.State = states;
        console.log(this.State, 'Os estados que trazem????')
      },
      error: (error) => { console.log(error)}
      
    });
  }


  

  deveLoper(){
      this.apiConsumoService.getDeveloper().subscribe({
        next: (res) => {
          this.developer = res;
          console.log(this.developer, 'developer')
         
        },
        error: (error) => {
          this.deveLoper = error;
          console.error(this.developer, 'developer error')
        }
      })
  }

  getStatus() {
    this.apiConsumoService.getStatus().subscribe({
      next: (res: userRegistro[]) => {

        console.log('API Response:', res);
        if (res && res.length > 0 && res[0].userRegistrationId !== undefined) {
          this.usuario = res[0]; 
          this.formularioPreCadastro.patchValue({
            userRegistrationId: this.usuarioRegistro = this.usuario.userRegistrationId
          })
          console.log(this.usuarioRegistro, 'Status');
        } else {
          console.error('Invalid response structure', res);
        }
      
      },
      error: (error) => console.error(error, 'Error de Status')
    });
  }
  
  salvarDados() {
    for (const field in this.formularioPreCadastro.controls) {
      const control = this.formularioPreCadastro.get(field);
      if (control instanceof FormControl) {
        console.log(`${field}: ${control.valid}`);
      }
    }
    this.validate = !this.validate;
    if (this.formularioPreCadastro.valid) {

      const dadosEnviar: EnviarDados = this.formularioPreCadastro.value;

      this.apiConsumoService.sendDatas(dadosEnviar).subscribe({
          next: (result) =>   {
            console.log('Sucesso ao enviar dados', result);
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.modal.open(SimpleModalComponent, { centered: true, size: 'sm', windowClass: 'custom-modal' })
              .componentInstance.mensagem = 'Dados Enviados com Sucesso'
              this.formularioPreCadastro.reset();
              //this.setNextUserRegistrationId();
              this.setMaisIncrement();
            }, 2000)
            this.limparFormulario();
          },
          error: (error) => {
            console.error('Erro ao enviar dados', error)
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              const modalRef = this.modal.open(SimpleModalComponent, { centered: true, size: 'sm', windowClass: 'custom-modal' });
              modalRef.componentInstance.mensagemErro = true; // Define mensagemErro como true
              modalRef.componentInstance.mensagem = 'Falha ao Salvar o Pré Cadastro';
              modalRef.componentInstance.alerta = 'Existem campos a serem preenchidos';
            }, 2000)
        
          }
      
      });
    } else {
      console.log('Formulário inválido. Verifique os campos.');
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        const modalRef = this.modal.open(SimpleModalComponent, { centered: true, size: 'sm', windowClass: 'custom-modal' });
        modalRef.componentInstance.mensagemErro = true; // Define mensagemErro como true
        modalRef.componentInstance.mensagem = 'Falha ao Salvar o Pré Cadastro';
        modalRef.componentInstance.alerta = 'Existem campos a serem preenchidos';
      }, 1000)
      
    }
  }

  limparFormulario(): void {
    this.formularioPreCadastro.reset();
    this.removerValidacao();
  }

  removerValidacao(): void {
    this.validate = false;

    // Remova a classe 'was-validated' e outras classes necessárias aqui
    const formElement = document.getElementById('formularioPreCadastro'); // Substitua 'seuFormulario' pelo ID real do seu formulário
    if (formElement) {
      formElement.classList.remove('was-validated');

      // Remova as classes 'ng-dirty' e 'ng-touched' de todos os controles
      formElement.querySelectorAll('.ng-dirty, .ng-touched').forEach((element) => {
        element.classList.remove('ng-dirty', 'ng-touched');
      });
    }
  }



  Increment(): number {
    let increment = 0;
    return increment;
  }

  getmaisIncrement(): number {
    const increment = this.Increment();
    return increment + 1;
  }

  setMaisIncrement() {
    const nextId = this.getmaisIncrement();
    this.formularioPreCadastro.patchValue({UserRegistrationId: nextId});
  }

 
}
