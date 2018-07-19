using System;
using System.Web;
using System.Configuration;
using System.IO;
using System.Web.Script.Services;
using System.Web.Services;
using System.Data.SqlClient;

[ScriptService]
public partial class RequestPage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
      System.Threading.Thread.Sleep(Convert.ToInt32(Request["i"]) * 1000);
    }
}