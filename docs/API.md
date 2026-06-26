Documentação da API
Endpoints

POST	/customers	-  Criar cliente

GET	/customers - 	Listar clientes

POST	/transports - 	Criar transportadora

GET	/transports - 	Listar transportadoras
POST	/items  - 	Criar produto
GET	/items - 	Listar produtos
POST	/customers/{customerId}/transports	 - Autorizar transportadora
GET	/customers/{customerId}/transports - 	Listar autorizações
POST	/sales-orders	 - Criar pedido
GET	/sales-orders	-  Listar pedidos (status, customerId, transportId)
PATCH	/sales-orders/{id}/status - 	Alterar status
POST	/schedule/{orderId}	- Criar agendamento
GET	/schedule/{orderId} - 	Consultar agendamento
PATCH	/schedule/{orderId}/confirm - 	Confirmar agendamento

Fluxo de Status
CRIADA → PLANEJADA → AGENDADA → EM_TRANSPORTE → ENTREGUE
