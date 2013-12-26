import java.sql.Connection;
import java.sql.DriverManager;


public class Connect_mysql {
	String drivername="com.mysql.jdbc.Driver";
	String url="jdbc:mysql://localhost/xeon_misdb";
	String user="root";
	String password="system";
	Connection conn;
	public Connection ConnectMysql(){
		try{
			Class.forName(drivername);
			conn=(Connection )DriverManager.getConnection(url,user,password);
			if(!conn.isClosed()){
				System.out.println("Succeeded connecting to the Database!");
			}
			else{
				System.out.println("Failed connecting to the Database!");
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return  conn;
	}
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connect_mysql cm=new Connect_mysql();
		cm.ConnectMysql();

	}

}
