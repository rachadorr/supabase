const supabaseUrl = 'https://xxxx.supabase.co'; // substitua pelo seu
const supabaseKey = 'public-anon-key';          // pegue no Supabase (Project > API > anon key)

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Exemplo: listar dados de uma tabela
async function carregarDados() {
  const { data, error } = await supabase.from('sua_tabela').select('*');
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
}

carregarDados();
