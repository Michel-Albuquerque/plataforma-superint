# Plataforma Operacional - Estrutura V2

Fundação técnica sem dados operacionais.

## Componentes

- GitHub Pages: publicação da interface.
- Supabase: banco/API.
- Frontend: HTML/CSS/JavaScript estático.
- Python: reservado para futuras rotinas de tratamento e carga.

## 1. Supabase

No projeto `fjgfwfnnhebfvuvvjsui`:

1. Abra o SQL Editor.
2. Execute `sql/001_estrutura_inicial.sql`.
3. Vá em Settings > API Keys / Connect.
4. Copie a **Publishable Key** (`sb_publishable_...`).
5. Cole apenas essa chave em `config/supabase_config.js`.

Nunca publique `sb_secret_...`, `service_role`, senha do banco ou token pessoal.

## 2. GitHub

Publique estes arquivos no branch `main`.

Em Settings > Pages:
- Source: GitHub Actions.

O workflow `.github/workflows/pages.yml` fará o deploy.

## 3. Teste

Abra a URL do GitHub Pages.

Resultado esperado:
- GitHub Pages: OK
- Supabase: Conectado
- Registro: infraestrutura = online

Depois disso, a fundação está pronta para receber as futuras bases e módulos.
