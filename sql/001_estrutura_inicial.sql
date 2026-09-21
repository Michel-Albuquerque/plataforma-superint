-- Estrutura técnica mínima.
-- Não contém dados operacionais.

create table if not exists public.app_status (
  id text primary key,
  nome text not null,
  valor text not null,
  atualizado_em timestamptz not null default now()
);

alter table public.app_status enable row level security;

drop policy if exists "app_status_public_read" on public.app_status;

create policy "app_status_public_read"
on public.app_status
for select
to anon, authenticated
using (true);

grant select on table public.app_status to anon, authenticated;

insert into public.app_status (id, nome, valor, atualizado_em)
values ('estrutura', 'infraestrutura', 'online', now())
on conflict (id)
do update set
  nome = excluded.nome,
  valor = excluded.valor,
  atualizado_em = excluded.atualizado_em;
