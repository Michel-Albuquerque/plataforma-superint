(async function () {
  const cfg = window.SUPABASE_CONFIG || {};
  const status = document.getElementById('supabaseStatus');
  const details = document.getElementById('details');

  if (!cfg.url || !cfg.publishableKey || cfg.publishableKey.includes('COLE_AQUI')) {
    status.textContent = 'Configuração pendente';
    status.style.color = '#b54708';
    details.textContent =
      'GitHub: página carregada corretamente.\n' +
      'Supabase: falta inserir a Publishable Key em config/supabase_config.js.';
    return;
  }

  try {
    const response = await fetch(
      cfg.url + '/rest/v1/app_status?select=id,nome,valor,atualizado_em&id=eq.estrutura',
      {
        cache: 'no-store',
        headers: {
          apikey: cfg.publishableKey
        }
      }
    );

    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ' - ' + await response.text());
    }

    const rows = await response.json();

    if (!Array.isArray(rows) || rows.length === 0) {
      throw new Error('Tabela acessível, mas registro de diagnóstico não encontrado.');
    }

    status.textContent = 'Conectado';
    status.style.color = '#0f5132';

    details.textContent =
      'GitHub: OK\n' +
      'Supabase: OK\n' +
      'Project Ref: ' + cfg.projectRef + '\n' +
      'Registro: ' + rows[0].nome + ' = ' + rows[0].valor + '\n' +
      'Atualizado em: ' + rows[0].atualizado_em;
  } catch (err) {
    status.textContent = 'Falha';
    status.style.color = '#b42318';
    details.textContent =
      'GitHub: OK\n' +
      'Supabase: falha no teste.\n\n' +
      String(err);
  }
})();
